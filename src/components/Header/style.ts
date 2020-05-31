import styled from 'styled-components'

interface HeaderProps {
  navShow: Boolean
}

export const StyledHeader = styled.header<HeaderProps>`
  width: 100%;
  top: 0;
  display: flex;
  padding: 20px 0;
  height: ${(props) => (props.navShow ? '100vh' : '')};
  background: ${(props) => (props.navShow ? 'rgba(0,0,0,0.5)' : 'transparent')};
  transition: all 0.4s ease;

  .navbar_web {
    position: relative;
    width: 100%;

    .toggle_show {
      position: absolute;
      display: none;
      top: ${(props) => (props.navShow ? '8px' : '15px')};
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
      font-family: "Lato", sans-serif;
      font-size: 45px;
      letter-spacing: 0px;
      color: #f27f1b;
      text-transform: uppercase;
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
      }
    }

    @media (max-width: 900px) {
      .toggle_show {
        display: block;
      }

      .container {
        padding: 0 100px;

        ul {
          display: none;
        }
      }
    }
  }

  .navbar_mobile {
    /* display: none; */
    position: absolute;
    top: 0;
    width: 350px;
    height: 100vh;
    background: white;
    padding: 40px;
    transform-origin: left;
    transform: ${(props) => (props.navShow ? 'rotateY(0deg)' : 'rotateY(-100deg)')};
    transition: all 0.4s ease;

    h3 {
      font-family: "Lato", sans-serif;
      font-size: 50px;
      letter-spacing: 0px;
      color: #f27f1b;
      text-transform: uppercase;
      margin: 0 15px;
    }

    ul {
      position: absolute;
      list-style: none;
      top: 190px;
      margin-top: 6px;
      color: rgba(0, 0, 0, 0.7);

      li {
        margin: 0 20px;
        margin-top: 10px;
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
          margin-top: 15px;
        }
      }
    }
  }
`
