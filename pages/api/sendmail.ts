import type { NextApiRequest, NextApiResponse } from 'next'
import { sendMail } from "@/mailService";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  console.log(req)

  try {
    switch (method) {
      case "POST": {
        await sendMail(body.name, body.email, body.subject, body.message);
        res.status(200).send("Success");
        break;
      }
      default: res.status(200).send("Failed"); break;
    }
  } catch (err: any) {
    res.status(400).json({
      error_code: err,
      message: err.message,
    });
  }
};

export default handler;