import Service from "../models/Service.js";
import tryCatch from "./util/tryCatch.js";


export const getAllServices = tryCatch(async (req, res) => {
    const services = await Service.find({});
    // console.log("services",services)
    res.status(200).json({
        success: true,
        result: services
    });
}
);
