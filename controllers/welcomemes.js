const welcomemess = (req,res)=>{
    res.status(200).writeJSON({"ServerMessage":"Welcome To NodeOS Management Dashboard Server"})
}

module.exports = {welcomemess}