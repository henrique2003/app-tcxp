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

    &:nth-child(5) {
      background: #f27f1b;
      width: 100px;
      text-align: center;
      border-radius: 5px;
      color: white;
    }
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
    transition: all .7s cubic-bezier(.64,.89,.87,.67);

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

        &:nth-child(5) {
          margin-top: 20px;
          width: 150px;
          height: 40px;
          line-height: 38px;
          letter-spacing: 2px;
        }
      }
    }

    /* Celphone */
    @media(max-width: 600px) {
      width: 250px;
      padding: 35px 25px;

      h3 {
        font-size: 45px;
        margin: 0 15px;
      }

      ul {
        top: 190px;

        li {
          margin-top: 5px;

          &:nth-child(5) {
            margin-top: 10px;
          }
        }
      }
    }
  }
`
