import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "duyurular.org", 
      port: 587, 
      secure: false, 
      auth: {
        user: "alicecamping@naver.com", 
      },
    });

    

    await transporter.sendMail({
      from: "info@duyurular.org",
      to: "alicecamping@naver.com",
      subject: `새 메시지가 도착했습니다 - ${name}`,
      text: message, // Plain text (isteğe bağlı)
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
      <h2 style="color: #333;">📬 새로운 메시지</h2>
      <p><strong>보낸 사람:</strong> ${name}</p>
      <p><strong>이메일:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>메시지 내용:</strong></p>
      <div style="padding: 10px; background: #fff; border: 1px solid #ddd; border-radius: 5px;">
        ${message.replace(/\n/g, "<br/>")}
      </div>
    </div>
  `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Mail gönderme hatası:", err);
    return new Response(JSON.stringify({ error: "Gönderilemedi" }), {
      status: 500,
    });
  }
}
