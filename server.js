const CONFIG = require('./app/config/configuracion')
const app = require('./app/app')

app.listen(CONFIG.PORT,()=>{
    console.log(`server is running on port ${CONFIG.PORT}`);

})