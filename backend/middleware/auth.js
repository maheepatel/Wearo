import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized, Please login again" });
  }

  try {
    // here we verify the token and using the token we generate the id and provide it to the req.body
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: `Invalid token due to : ${error.message}`,
    });
  }
};

export default authUser;
