import type { NextApiRequest, NextApiResponse } from 'next'
import { sendMail } from "@/mailService";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req

  try {
    if (body.name && body.email && body.subject && body.message) {
      await sendMail(body.name, body.email, body.subject, body.message);
      res.status(200).json({ ok: true, message: "Thank you for getting in touch!" });
    } else {
      res.status(400).json({ ok: false, message: "Oops! Something went Wrong" });
    }
  } catch (err: any) {
    res.status(400).json({
      error_code: err,
      message: "Oops! Something went Wrong",
    });
  }
};

export default handler;