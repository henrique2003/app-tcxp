import styled, { css } from 'styled-components'

interface HeaderProps {
  navShow: boolean
  logged: boolean
  dropDown: boolean
}

export const StyledHeader = styled.header<HeaderProps>`
  position: ${(props) => (props.navShow ? 'fixed' : 'relative')};
  width: 100%;
  top: 0;
  display: flex;
  z-index: 5;
  padding: 30px 0;
  height: ${(props) => (props.navShow ? '100vh' : '')};
  background: transparent;
  ${(props) => (props.navShow && css`
    background: rgba(0,0,0,0.5) !important;
    transition: all 0.4s ease;
  `)};

  h3 {
    font-family: "Lato", sans-serif;
    color: #f27f1b;
    text-transform: uppercase;
  }

  li {
    margin: 0 20px;
    padding: 0;
    font-family: "Lato", sans-serif;
    font-size: 19px;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    color: ${props => props.logged ? 'rgba(0,0,0,0.7)' : 'white'};

    a {
      text-decoration: none;
    }

    &:nth-child(5) {
      background: #f27f1b;
      width: 100px;
      text-align: center;
      border-radius: 5px;
      color: ${props => props.logged ? 'rgba(0,0,0,0.7)' : 'white'};
      margin-right: 0;
    }
  }

  /* Celhpone */
  @media(max-width: 428px) {
    padding: 20px 0;
  }

  /* Navbar web */
  .navbar_web {
    position: relative;
    width: 100%;

    .toggle_show {
      position: absolute;
      display: none;
      top: ${(props) => (props.navShow ? '0' : '10px')};
      right: ${(props) => (props.navShow ? '30px' : '120px')};

      .align_justify {
        display: ${(props) => (props.navShow ? 'none' : 'block')};
        width: 30px;
        height: 4px;
        margin-top: 5px;
        background: white;
        border-radius: 5px;
      }

      svg {
        display: ${(props) => (props.navShow ? 'block' : 'none')};
        position: fixed;
        top: 30px;
        right: 30px;
        color: white;
        font-size: 55px;
      }
    }

    h3 {
      display: ${(props) => (props.navShow ? 'none' : 'block')};
      font-size: 50px;
      letter-spacing: 0px;
    }

    .container {
      display: flex;
      width: 100%;
      padding: 0 80px;
      flex-direction: row;
      justify-content: space-between;

      ul {
        display: flex;
        list-style: none;
        margin-top: 8px;
        color: white;

        li {
          letter-spacing: 1px;

          &:nth-child(5) {
            background: #f27f1b;
            background: ${props => props.logged ? 'transparent' : '#f27f1b'};
            width: ${props => props.logged ? 'auto' : '120px'};
          }

          a {
            color: ${props => props.logged ? 'rgba(0,0,0,0.7)' : 'white'};
          }

          img {
            margin-top: 3px;
          }

          ul {
            position: absolute;
            right: 25px;
            display: flex;
            flex-direction: column;
            border: 1px solid ${props => props.dropDown ? 'rgba(0,0,0,0.6)' : 'white'};
            padding: 0 10px;
            max-height: ${props => props.dropDown ? 300 : 0}px;
            overflow: hidden;
            transition: all .3s ease;

            li {
              margin: 5px;
              margin-top: 15px;
              padding-bottom: 48px;
              border-bottom: 1px solid rgba(0,0,0,0.3);

              &:nth-child(3) {
                border-bottom: none;
                margin-top: 5px;
                padding-bottom: 40px;
              }
              
              &:nth-child(2) {
                margin-top: 5px;
              }
            }
          }
        }
      }
    }

    /* Ipad */
    @media (max-width: 900px) {
      h3 {
        margin-left: 5px;
      }

      .toggle_show {
        display: block;
        top: ${(props) => (props.navShow ? '0' : '10px')};
        right: ${(props) => (props.navShow ? '30px' : '95px')};

        .align_justify {
          background: ${props => props.logged ? 'rgba(0,0,0,0.7)' : 'white'};
        }
      }

      .container {
        ul {
          display: none;
        }
      }
    }

    
    /* Big celphone */
    @media (max-width: 600px) {
      h3 {
        font-size: 40px;
      }
      
      .toggle_show {
        right: ${(props) => (props.navShow ? '30px' : '65px')};

        .align_justify {
          width: 25px !important;
          height: 3px !important;
          margin-top: 4px !important;
          border-radius: 20px;
        }
      }

      .container {
        padding: 0 45px;
      }
    }

     
    /* Celphone */
    @media (max-width: 428px) {
      .container {
        padding: 0 35px !important;
      }

      h3 {
        font-size: 40px;
        margin: 0;
      }
      
      .toggle_show {
        top: ${(props) => (props.navShow ? '0' : '8px')};
        right: ${(props) => (props.navShow ? '15px' : '40px')};

        .align_justify {
          width: 25px !important;
          height: 4px !important;
          margin-top: 4px !important;
        }

        svg {
          font-size: 40px;
        }
      }

      .container {
        padding: 0 45px;
      }
    }

    @media(max-width: 350px) {
      .toggle_show {
        svg {
          font-size: 35px;
        }
      }
    }
  }

  .navbar_mobile {
    /* Ipad */
    position: fixed;
    top: 0;
    width: 400px;
    height: 100vh;
    background: white;
    padding: 40px;
    transform-origin: left;
    transform: ${(props) => props.navShow ? 'rotateY(0deg)' : 'rotateY(-100deg)'};
    box-shadow: 2px 0 5px rgba(0,0,0,.3);
    transition: all 1s cubic-bezier(.87,.67,.87,.67);

    h3 {
      font-family: "Lato", sans-serif;
      font-size: 55px;
      letter-spacing: 0px;
      color: #f27f1b;
      text-transform: uppercase;
      margin: 0 15px;
    }

    ul {
      position: absolute;
      list-style: none;
      top: ${props => props.logged ? '250px' : '350px'};
      margin-top: 6px;
      color: rgba(0, 0, 0, 0.8);
      width: 70%;

      li {
        margin-top: 15px;
        font-size: 24px;

        a {
          color: rgba(0, 0, 0, 0.8);
        }

        &:nth-child(4) {
          margin-bottom: 30px;
        }

        &:nth-child(5) {
          margin-top: 20px;
          width: 150px;
          height: 40px;
          line-height: 38px;
          letter-spacing: 2px;
          ${props => props.logged && css`
            text-align: left;
            background: transparent;
            width: 100%;
            height: auto;
            letter-spacing: 0;
            border-top: 1px solid rgba(0,0,0,0.6);
            border-radius: 0;
            padding-top: 25px;
          `};
        }
      }
    }

    /* Big celphone */
    @media(max-width: 600px) {
      width: 300px;
      padding: 35px 25px;

      h3 {
        font-size: 50px;
        margin: 0 15px;
      }

      ul {
        top: 300px;

        li {
          margin-top: 5px;
          font-size: 22px;

          &:nth-child(5) {
            margin-top: 15px;
            font-size: 21px;
            height: 35px;
            line-height: 34px;
          ${props => props.logged && css`
            margin-top: 20px;
            line-height: 38px;
            height: auto;
          `};
          }
        }
      }
    }

    
    /* Celphone */
    @media(max-width: 428px) {
      width: 250px;
      padding: 25px 25px;

      h3 {
        font-size: 45px;
        margin: 0 15px;
      }

      ul {
        top: ${props => props.logged ? '180px' : '230px'};

        li {
          margin-top: 4px;
          font-size: 19px;

          &:nth-child(5) {
            font-size: 18px;
            width: 120px;
          ${props => props.logged && css`
            margin-top: 20px;
            line-height: 38px;
            width: auto;
            height: auto;
          `};
          }
        }
      }
    }

    @media(max-width: 350px) {
      ul {
        top: ${props => props.logged ? '120px' : '210px'};
      }
    }
  }
`
