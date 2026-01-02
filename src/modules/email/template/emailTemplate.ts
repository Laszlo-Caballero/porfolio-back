export default function EmailTemplate({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return `
  <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Oferta Laboral</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#eef2f7; font-family: Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0; background-color:#eef2f7;">
        <tr>
        <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:10px; box-shadow:0 8px 24px rgba(0,0,0,0.08); overflow:hidden;">

        <tr>
            <td style="background:linear-gradient(135deg,#2563eb,#1e40af); padding:30px; text-align:center;">
            <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:bold;">
                Oferta de Trabajo
            </h1>
            <p style="margin:8px 0 0; color:#dbeafe; font-size:14px;">
                Nueva oportunidad profesional
            </p>
            </td>
        </tr>

        <tr>
            <td style="padding:35px; color:#1f2937;">

            <p style="font-size:16px; margin:0 0 18px;">
                Hola <strong>${name}</strong>,
            </p>

            <p style="font-size:15px; line-height:1.7; margin:0 0 18px; color:#374151;">
                Hemos revisado tu perfil y creemos que tu experiencia encaja muy bien con una oportunidad laboral que actualmente tenemos disponible.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border-left:4px solid #2563eb; padding:18px; margin:25px 0; border-radius:6px;">
                <tr>
                <td style="font-size:15px; line-height:1.6; color:#374151;">
                    ${message}
                </td>
                </tr>
            </table>

            <p style="font-size:15px; line-height:1.7; margin:0 0 25px; color:#374151;">
                Si te interesa conocer más detalles o coordinar una conversación, estaremos encantados de ponernos en contacto contigo.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                <td align="center">
                    <a href="mailto:${email}" 
                    style="background-color:#2563eb; color:#ffffff; text-decoration:none; padding:14px 28px; border-radius:6px; font-size:15px; font-weight:bold; display:inline-block;">
                    Responder oferta
                    </a>
                </td>
                </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:30px;">
                <tr>
                <td style="font-size:13px; color:#6b7280; text-align:center;">
                    📧 ${email}
                    ${phone ? ` | 📞 ${phone}` : ''}
                </td>
                </tr>
            </table>

            <p style="font-size:15px; margin:30px 0 0;">
                Saludos cordiales,<br />
                <strong>Equipo de Reclutamiento</strong>
            </p>

            </td>
        </tr>

        <tr>
            <td style="background-color:#f3f4f6; padding:18px; text-align:center; font-size:12px; color:#6b7280;">
            Este mensaje fue enviado de manera automática.<br />
            Si no deseas recibir más comunicaciones, puedes ignorar este correo.
            </td>
        </tr>

        </table>

    </td>
    </tr>
  </table>
</body>
</html>
`;
}
