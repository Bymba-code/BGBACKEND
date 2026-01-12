const { updateData } = require("../../../services/controllerService")
const bcrypt = require("bcrypt")

const UPDATE_HEADER = async (req , res) => {
    try 
    {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(400).json({
                success: false,
                data: null,
                message: 'Мэдээлэл буруу эсвэл дутуу байна.'
            });
        }

        let logo;

        if(req.file)
        {
            logo = `/${req.file.path}`
        }

        await updateData(res, {
            model:`header`,
            whereClause: { id: parseInt(id)},
            data: {
                ...(logo && { logo })
            }
        })

        
    }
    catch(err)
    {
        return res.status(500).json({
            success:false,
            data:[],
            message: "Серверийн алдаа гарлаа." + err
        })
    }
}

module.exports = UPDATE_HEADER