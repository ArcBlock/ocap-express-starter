const express = require('express');
const config = require('config');
const OCAPClient = require('@arcblock/ocap-js');

const supportedDataSource = ['btc', 'eth'];
const clients = {};
supportedDataSource.forEach(dataSource => {
  clients[dataSource] = new OCAPClient({
    dataSource,
    httpEndpoint: ds => `${config.ocap.baseUrl}/${ds}`,
    // accessKey: config.ocap.accessKey,
    // accessSecret: config.ocap.accessSecret,
  });
});

const strip0x = uuid => (uuid.startsWith('0x') ? uuid.slice(2) : uuid);

const generateHandler = (method, paramKey) => (req, res) => {
  const { uuid, dataSource } = req.params;
  const { cursor, size } = req.query;

  if (!dataSource) {
    return res.status(400).jsonp({ errmsg: '`dataSource` param is required' });
  }
  if (!supportedDataSource.includes(dataSource)) {
    return res.status(400).jsonp({ errmsg: '`dataSource` is not supported' });
  }
  if (!uuid) {
    return res.status(400).jsonp({ errmsg: '`uuid` param is required' });
  }

  const client = clients[dataSource];
  if (typeof client[method] !== 'function') {
    return res.status(500).jsonp({ errmsg: 'invalid data fetch middleware' });
  }

  const cleanUUID = dataSource === 'eth' ? strip0x(uuid) : uuid;
  const paging = { size: Number(size) || config.ocap.pageSize };
  if (cursor) {
    paging.cursor = cursor;
  }

  client[method](
    {
      [paramKey]: cleanUUID,
      paging,
    },
    {
      ignoreFields: ['data.parent', 'data.publicKey', 'data.from.pubKey', 'data.to.pubKey'],
    }
  )
    .then(_res => {
      res.jsonp(_res[method]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(`<pre>${err.stack}</pre>`);
    });
};

const router = express.Router();

router.get(
  '/:dataSource/transactionsBySender/:uuid',
  generateHandler('transactionsByAddress', 'sender')
);
router.get(
  '/:dataSource/transactionsByReceiver/:uuid',
  generateHandler('transactionsByAddress', 'receiver')
);
router.get('/:dataSource/account/:uuid', generateHandler('accountByAddress', 'address'));
router.get('/:dataSource/transaction/:uuid', generateHandler('transactionByHash', 'hash'));
router.get('/:dataSource/block/:uuid', generateHandler('blockByHash', 'hash'));

module.exports = router;
