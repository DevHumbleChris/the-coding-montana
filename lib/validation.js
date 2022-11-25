import Joi from "joi";

const adminRegisterModel = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "org"] },
  }).required(),
  role: Joi.string().required()
});

export const adminRegister = (data) => adminRegisterModel.validate(data)
