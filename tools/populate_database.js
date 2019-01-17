import * as async from 'async';
import data from './data';
import models from '../models';

async.eachSeries(Object.keys(data), (modelName, callback) => {
    const tableName = modelName;
    const model = models[ tableName ];
    if (Array.isArray(data[ tableName ]) && data[ tableName ].length > 0) {
        model.bulkCreate(data[ tableName ]).then(() => {
            console.log(`${tableName} : OK`);
            callback();
        }).catch((err) => {
            console.log(err);
            console.log(`${tableName} : KO`);
        });
    }
}, () => {
});
