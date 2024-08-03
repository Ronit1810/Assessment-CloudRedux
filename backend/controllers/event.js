const eventModel = require('../models/EventModels.js')

exports.eventDetail = async(req,res) => {
    try {
        const body = req.body;
        const eventData = await eventModel.create(body);
        if (eventData) {
            res.status(200).send({
                success:true,
                message:"event Created successfully",
                data: eventData
            })
        } else {
            res.status(202).send({
                success: true,
                message:"Event not created"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in post request eventDetail",
            error
        })
        
    }
}


exports.getDetail = async(req,res) => {
    try {
        const data = await eventModel.find();
        if (data) {
            res.status(200).send({
                success:true,
                message:"Event Data Fetched",
                data: data 
            })
        } else {
            res.status(202).send({
                success:true,
                message:"No data Found"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getDetail",
            error,
        })
        
    }
}



exports.getEventById = async(req,res) => {
    try {
        const { id } = req.params;
        const data = await eventModel.findById(id);
        if (data) {
          res.status(200).send({
            success: true,
            message: "Event data fetched Successfully",
            data: data,
          });
        } else {
          res.status(202).send({
            success: true,
            message: "No Event available by Id..",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "error at controllers/Event.js/getEventById",
          error,
        });
      }
}



exports.updateEvent = async(req,res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const data = await eventModel.updateOne({_id:id}, body)
        const updatedData = await eventModel.findById(id)
        if (data) {
          res.status(200).send({
            success: true,
            message: "Patient updated successfully",
            data: updatedData
          })
        }else{
          res.status(202).send({
            success: true,
            message: "Patient can't update"
          })
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "error in controllers/patient.js/UpdatePatient",
          error
        })
      }
}