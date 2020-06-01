import styled from 'styled-components'

interface Introduction {
  image: string
  useTerms: boolean
}

export const StyledIntroduction = styled.div<Introduction>`
  position: absolute;
  top: 0;
  z-index: 2;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100%;
  height: 100vh;

  .row {
    color: white;
    margin-top: 30vh;
    display: flex;
    width: 100%;

    .wrapper_content {
      margin-top: 30px;
      margin-left: 10px;
      font-family: "Lato", sans-serif;
      flex: 1;

      h5 {
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
        transition: all .3s ease;

        &:hover {
          background: #d46e16;
          transition: all .3s ease;
        }
      }
    }

    .wrapper_form {
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
                visibility: ${(props) =>
                  props.useTerms ? 'visible' : 'hidden'};
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
              transition: all .4s ease;

              &:hover {
                transform: translateX(5px);
                transition: all .4s ease;
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
  }
`
