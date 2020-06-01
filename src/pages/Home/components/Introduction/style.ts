import styled from 'styled-components'

interface Introduction {
  useTerms: boolean
  image: string
}

export const StyledIntroduction = styled.div<Introduction>`
  margin-top: -120px;
  display: block;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100%;
  height: 100vh;

  .wrapper_content {
    margin-top: 30vh;
    color: white;
    margin-left: 10px;
    flex: 1;

    h5 {
      margin-top: 30px;
      font-weight: normal;
      font-size: 26px;
      width: 80%;
      font-weight: 400;
    }

    p {
      margin-top: 15px;
      font-size: 19px;
      letter-spacing: 1px;
      width: 80%;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 35px;
    }

    a {
      font-size: 19px;
      color: white;
      background: #f27f1b;
      font-weight: 400;
      padding: 10px 30px;
      text-decoration: none;
      border-radius: 5px;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;

      &:hover {
        background: #d46e16;
        transition: all 0.3s ease;
      }
    }
  }

  .wrapper_form {
    margin-top: 30vh;
    flex: 1;

    form {
      padding: 30px 50px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      max-width: 500px;
      margin-left: auto;

      .wrapper_title {
        margin-bottom: 10px;

        p {
          font-size: 25px;
          color: rgba(0, 0, 0, 0.65);
          font-weight: bold;
        }
      }

      .wrapper_fields {
        input[type="text"],
        input[type="password"],
        input[type="email"] {
          width: 100%;
          border: none;
          border-radius: 20px;
          padding: 7px 15px;
          background: rgba(255, 255, 255, 0.7);
          margin-top: 25px;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          font-weight: normal;
          font-size: 16px;
        }

        .wrapper_submit {
          margin-left: 2px;
          margin-right: 0px;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;

          .wrapper_checkbox {
            position: relative;
            line-height: 38px;

            .field_checbox {
              border: none;
              padding: 1px 15px;
              background: white;
              border-radius: 20px;
              box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
              margin-right: 10px;

              input[type="checkbox"] {
                display: none;
              }
            }

            svg {
              visibility: ${(props) => (props.useTerms ? 'visible' : 'hidden')};
              position: absolute;
              top: 7px;
              font-size: 20px;
              display: block;
              margin-left: 5px;
            }

            label {
              font-size: 17px;
              color: rgba(0, 0, 0, 0.6);
              font-weight: bold;
              letter-spacing: 1px;
              text-decoration: underline;
            }
          }

          button {
            background: #f27f1b;
            padding: 5px 28px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            transition: all 0.4s ease;

            &:hover {
              transform: translateX(5px);
              transition: all 0.4s ease;
            }

            img {
              width: 38px;
              margin-top: 2px;
            }
          }
        }
      }
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    height: auto;

    .wrapper_content {
      margin-top: 120px;
      margin-left: 0;

      h5 {
        font-size: 23px;
        width: 100%;
        max-width: 600px;
      }

      p {
        margin-top: 15px;
        font-size: 17px;
        width: 100%;
        max-width: 550px;
        margin-bottom: 35px;
      }

      a {
        font-size: 17px;
      }
    }

    .wrapper_form {
      margin-top: 80px;
      margin-bottom: 60px;

      form {
        padding: 35px 50px;
        max-width: 100%;

        .wrapper_title {
          margin-bottom: 5px;

          p {
            font-size: 23px;
          }
        }

        .wrapper_fields {
          input[type="text"],
          input[type="password"],
          input[type="email"] {
            padding: 6px 15px;
            margin-top: 23px;
          }

          .wrapper_submit {
            margin-left: 2px;
            margin-right: 0px;
            margin-top: 25px;

            button {
              padding: 2px 25px;

              img {
                width: 35px;
                margin-top: 2px;
              }
            }
          }
        }
      }
    }
  }

  /* Big celphones */
  @media (max-width: 600px) {
    .wrapper_content {
      margin-top: 100px;

      h5 {
        font-size: 22px;
      }

      p {
        margin-top: 15px;
        font-size: 17px;
      }

      a {
        font-size: 16px;
      }
    }

    .wrapper_form {
      margin-top: 65px;
      margin-bottom: 55px;

      form {
        padding: 35px 45px;

        .wrapper_title {
          margin-bottom: 4px;

          p {
            font-size: 22px;
          }
        }

        .wrapper_fields {
          input[type="text"],
          input[type="password"],
          input[type="email"] {
            margin-top: 22px;
          }

          .wrapper_submit {
            button {
              padding: 0 20px;

              img {
                width: 33px;
                height: 23px;
              }
            }

            .wrapper_checkbox {
              label {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  /* Big celphones */
  @media (max-width: 428px) {
    .wrapper_content {
      margin-top: 110px;

      h5 {
        font-size: 20px;
      }

      p {
        margin-top: 15px;
        font-size: 16px;
      }

      a {
        font-size: 15px;
      }
    }

    .wrapper_form {
      form {
        padding: 30px;

        .wrapper_title {
          margin-bottom: 4px;

          p {
            font-size: 21px;
          }
        }

        .wrapper_fields {
          input[type="text"],
          input[type="password"],
          input[type="email"] {
            margin-top: 15px;
            padding: 5px 20px;
            font-size: 14px;
          }

          .wrapper_submit {
            button {
              padding: 0 20px;

              img {
                margin-top: 3px;
                width: 26px;
                height: 20px;
              }
            }

            .wrapper_checkbox {
              line-height: 30px;

              .field_checbox {
                padding: 1px 13px;
                margin-right: 10px;
              }

              label {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  /* Big celphones */
  @media (max-width: 350px) {
    .wrapper_form {
      form {
        padding: 30px 20px;
      }
    }
  }
`

export const Row = styled.div`
  display: flex;
  width: 100%;

  /* Tablets */
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
