const { updateData } = require("../../../services/controllerService")
const bcrypt = require("bcrypt")

const UPDATE_HEADER_TERTIARY = async (req , res) => {
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

        const {nameMN, nameEN, route, index, font, fontColor, isVisible} = req.body;

        await updateData(res, {
            model:`header_tertiary_submenu`,
            whereClause: { id: parseInt(id)},
            data: {
                ...(nameMN && { nameMN }),
                ...(nameEN && { nameEN }),
                ...(route && { route }),
                ...(index && { index }),
                ...(font && { font }),
                ...(fontColor && { fontColor }),
                ...(isVisible && { isVisible })
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

module.exports = UPDATE_HEADER_TERTIARY