const { insertData } = require("../../../services/controllerService")
const bcrypt = require("bcrypt")
const prismaService = require("../../../services/prismaService") 

const POST_HEADER_MENU = async (req , res) => {
    try 
    {
        const {header, nameMN, nameEN, route, index, font, fontColor, isVisible} = req.body;

        if(!header)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Header сонгоно уу."
            })
        }
        if(!nameMN)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Монгол нэршил оруулна уу."
            })
        }
        if(!nameEN)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Англи нэршил оруулна уу."
            })
        }
        if(!route)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Хандах зам сонгоно уу."
            })
        }
        if(!index)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Дараалал оруулна уу."
            })
        }
        if(!font)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Фонт сонгоно уу."
            })
        }
        if(!fontColor)
        {
            return res.status(400).json({
                success:false,
                data:[],
                message: "Фонтын өнгө сонгоно уу."
            })
        }

        const result = await prismaService.header_menus.create({
            data: {
                header: parseInt(header),
                nameMN: nameMN,
                nameEN: nameEN,
                route: route,
                index: parseInt(index),
                font: font,
                fontColor:fontColor,
                isVisible: parseInt(isVisible),
                date: new Date()
            }
        })

        return res.status(200).json({
            success:true,
            data:result,
            message: "Амжилттай."
        })
        
    }
    catch(err)
    {
        return res.status(500).json({
            success:false,
            data:[],
            message: "Серверийн алдаа гарлаа."
        })
    }
}

module.exports = POST_HEADER_MENU