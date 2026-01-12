const { updateData } = require("../../../services/controllerService")
const bcrypt = require("bcrypt")

const UPDATE_HEADER_STYLE = async (req , res) => {
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

        const {backgroundColor, fontColor, hoverColor, height, sticky} = req.body;

        await updateData(res, {
            model:`header_style`,
            whereClause: { id: parseInt(id)},
            data: {
                ...(backgroundColor && { backgroundColor }),
                ...(fontColor && { fontColor }),
                ...(hoverColor && { hoverColor }),
                ...(height && { height }),
                ...(sticky && { sticky }),
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

module.exports = UPDATE_HEADER_STYLE