interface EmailTemplateProps {
  title: string
  content: string
  cta_label: string
  cta_onClick: () => void
}

export const EmailTemplate = ({
  title,
  content,
  cta_label,
}: EmailTemplateProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="body"
        style="
          border-collapse: separate;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          width: 100%;
          background-color: #f2f6fd;
          border-radius: 12px;
        "
      >
        <tr>
          <td
            style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          >
            &nbsp;
          </td>
          <td
            class="container"
            style="
              font-family: sans-serif;
              font-size: 14px;
              vertical-align: top;
              display: block;
              margin: 0 auto;
              max-width: 580px;
              padding: 10px;
              width: 580px;
            "
          >
            <div
              class="content"
              style="
                box-sizing: border-box;
                display: block;
                margin: 0 auto;
                max-width: 580px;
                padding: 10px;
              "
            >
              <!-- AWELL LOGO -->
              <table
                class="main"
                style="
                  border-collapse: separate;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  width: 100%;
                "
              >
                <tr>
                  <td
                    align="center"
                    style="
                      font-size: 0px;
                      padding: 10px 0 20px 0;
                      word-break: break-word;
                    "
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="border-collapse: collapse; border-spacing: 0px"
                    >
                      <tbody>
                        <tr>
                          <td style="width: 40px">
                            <img
                              height="auto"
                              src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1624517379/awell%20emails/Awell_Logo.png"
                              style="
                                border: 0;
                                display: block;
                                outline: none;
                                text-decoration: none;
                                margin: 0 auto;
                              "
                              width="40"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- END AWELL LOGO -->
    
              <!-- START CENTERED WHITE CONTAINER -->
              <table
                class="main"
                style="
                  border-collapse: separate;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  width: 100%;
                  background: #ffffff;
                  border-radius: 8px;
                  box-shadow: 1px 1px 31px 1px rgba(0, 74, 194, 0.06);
                  -webkit-box-shadow: 1px 1px 31px 1px rgba(0, 74, 194, 0.06);
                  -moz-box-shadow: 1px 1px 31px 1px rgba(0, 74, 194, 0.06);
                  margin-bottom: 32px;
                "
              >
                <!-- START EMAIL TITLE -->
                <tr>
                  <td
                    align="center"
                    style="
                      font-size: 0px;
                      padding: 48px 25px 0 25px;
                      word-break: break-word;
                    "
                  >
                    <div
                      style="
                        font-family: 'Helvetica Neue', Arial, sans-serif;
                        font-size: 24px;
                        font-weight: bold;
                        line-height: 1;
                        text-align: center;
                        color: #172b4d;
                      "
                    >
                      ${title}
                    </div>
                  </td>
                </tr>
                <!-- END EMAIL TITLE -->
    
                <!-- START HORIZONTAL SPACER -->
                <tr>
                  <td style="padding: 32px 32px 32px 32px">
                    <div style="border-bottom: 2px solid #f4f5f7"></div>
                  </td>
                </tr>
                <!-- END HORIZONTAL SPACER -->
    
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td
                    class="wrapper"
                    style="
                      font-family: sans-serif;
                      font-size: 14px;
                      vertical-align: top;
                      box-sizing: border-box;
                      padding: 0 64px 26px 64px;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        border-collapse: separate;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        width: 100%;
                      "
                    >
                      <tr>
                        <td
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            vertical-align: top;
                          "
                        >
                          <p
                            style="
                              color: #253858;
                              font-family: sans-serif;
                              font-size: 16px;
                              line-height: 24px;
                              font-weight: normal;
                              margin: 0;
                              margin-bottom: 16px;
                            "
                          >
                            ${content}
                          </p>
    
                          ${
                            cta_label
                              ? `
                          <!-- START CALL TO ACTION-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="btn btn-primary"
                            style="
                              border-collapse: separate;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              width: 100%;
                              box-sizing: border-box;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="center"
                                  style="
                                    font-family: sans-serif;
                                    font-size: 14px;
                                    vertical-align: top;
                                    padding: 16px 0 32px 0;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: separate;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      width: auto;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            font-family: sans-serif;
                                            font-size: 14px;
                                            vertical-align: top;
                                            background-color: #004ac2;
                                            border-radius: 5px;
                                            text-align: center;
                                          "
                                        >
                                          <button
                                            type='button'
                                            style="
                                              display: inline-block;
                                              color: #ffffff;
                                              background-color: #004ac2;
                                              border: solid 1px #004ac2;
                                              border-radius: 8px;
                                              box-sizing: border-box;
                                              cursor: pointer;
                                              text-decoration: none;
                                              font-size: 14px;
                                              font-weight: bold;
                                              margin: 0;
                                              padding: 4px 16px;
                                              border-color: #004ac2;
                                            "
                                          >
                                            ${cta_label}
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!-- END CALL TO ACTION-->
                          `
                              : ''
                          }
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- END MAIN CONTENT AREA -->
              </table>
              <!-- END CENTERED WHITE CONTAINER -->
    
              <!-- END CENTERED WHITE CONTAINER -->
            </div>
          </td>
          <td
            style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          >
            &nbsp;
          </td>
        </tr>
      </table>
      `,
      }}
    />
  )
}
