const {Router} = require("../utils/core/Router.js")
const { welcomemess } = require("../controllers/welcomemsg.js")
const {notFound} = require("../controllers/notfound.js")
const {osRouter}=require('./os.router.js')
const router = new Router()
router.get("/",welcomeMessage)
router.all("/*",notFound )
router.use(osRouter)
module.exports={router}