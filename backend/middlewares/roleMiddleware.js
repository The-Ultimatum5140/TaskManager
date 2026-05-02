export const roleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {
        try{
            // req cosming from req.user 
            if(!req.user || !req.user.role){
                return res.status(401).json({msg:"Unauthorised"})
            }
            if(!allowedRoles.includes(req.user.role)){
                return res.status(403).json({msg:"Forbidden"})
            }
            next();
        }catch(err){
            res.status(500).json({msg:err.message})
        }
    }
}