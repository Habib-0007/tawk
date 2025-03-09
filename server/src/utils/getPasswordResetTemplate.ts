export const getPasswordResetTemplate = (resetURL: string, email: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Tawkappapp | Password Reset</title>
   <style>
   @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

    * {
      font-family: "Inter", sans-serif;
    }
    body {
      font-family: "Inter", sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
 
    a {
      color: #4f39f6;
      transition: color ease 300ms;
    }

    a:hover, a:focus {
      color: #432dd7;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid #eeeeee;
    }
    .logo {
      max-height: 60px;
      margin-bottom: 15px;
    }
    .content {
      padding: 30px 20px;
    }
    .button {
      display: inline-block;
      background-color: #4f39f6;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 600;
      margin: 20px 0;
      text-align: center;
    }
    .button:hover {
      background-color: #432dd7;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #999999;
      font-size: 12px;
      border-top: 1px solid #eeeeee;
    }
    .note {
      padding: 15px;
      background-color: #eef2ff;
      border-radius: 4px;
      font-size: 13px;
      margin-top: 25px;
    }
    @media only screen and (max-width: 600px) {
      .container {
        width: 100%;
        border-radius: 0;
      }
    }
  </style>
  </head>
  <body>
  <div class="container">
    <div class="header">
     
      <img src="https://placehold.co/400" alt="Tawkappapp" class="logo">
      <h2>Password Reset Request</h2>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>We received a request to reset your password. Don't worry, we're here to help!</p>
      <p>Click the button below to reset your password. This link will expire in <strong>1 hour</strong>.</p>
      
      <div style="text-align: center;">
        <a href="${resetURL}" class="button">Reset Your Password</a>
      </div>
      
      <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
      <p style="word-break: break-all; font-size: 13px; align-text: center;"><a href="${resetURL}">${resetURL}</a></p>
      
      <div class="note">
        <p><strong>Note:</strong> If you didn't request a password reset, you can safely ignore this email. Your account security has not been compromised.</p>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent to ${email}</p>
      <p>&copy; ${new Date().getFullYear()} Tawkappapp. All rights reserved.</p>
      <p>Lagos, Nigeria</p>
    </div>
  </div>
</body>
</html>`;
};
