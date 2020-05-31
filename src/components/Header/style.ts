import styled, { css } from 'styled-components'

interface HeaderProps {
  navShow: Boolean
}

export const StyledHeader = styled.header<HeaderProps>`
  width: 100%;
  top: 0;
  display: flex;
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

    a {
      text-decoration: none;
    }

    &:nth-child(5) {
      background: #f27f1b;
      width: 100px;
      text-align: center;
      border-radius: 5px;
      color: white;
    }
  }

  /* Celhpone */
  @media(max-width: 428px) {
    padding: 20px 0;
  }

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
        background: brown;
        border-radius: 5px;
      }

      svg {
        display: ${(props) => (props.navShow ? 'block' : 'none')};
        position: absolute;
        top: 0;
        right: 0;
        color: white;
        font-size: 55px;
      }
    }

    h3 {
      display: ${(props) => (props.navShow ? 'none' : 'block')};
      font-size: 45px;
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
        margin-top: 6px;

        li {
          a {
            color: black;
          }
        }
      }
    }

    /* Ipad */
    @media (max-width: 900px) {
      .toggle_show {
        display: block;
        top: ${(props) => (props.navShow ? '0' : '10px')};
        right: ${(props) => (props.navShow ? '30px' : '80px')};
      }

      .container {
        padding: 0 60px;

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
        right: ${(props) => (props.navShow ? '30px' : '45px')};

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
  }

  .navbar_mobile {
    /* Ipad */
    position: absolute;
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
      top: 350px;
      margin-top: 6px;
      color: rgba(0, 0, 0, 0.7);

      li {
        margin-top: 15px;
        font-size: 24px;

        a {
          color: rgba(0, 0, 0, 0.7);
        }

        &:nth-child(5) {
          margin-top: 20px;
          width: 150px;
          height: 40px;
          line-height: 38px;
          letter-spacing: 2px;
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
        top: 230px;

        li {
          margin-top: 4px;
          font-size: 19px;

          &:nth-child(5) {
            margin-top: 15px;
            font-size: 18px;
            height: 35px;
            width: 120px;
            line-height: 34px;
          }
        }
      }
    }
  }
`
