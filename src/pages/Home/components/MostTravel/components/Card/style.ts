import styled from 'styled-components'

interface Props {
  image: string
}

export const StyledCard = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 500px;
  width: 350px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: -50%, -50%;
  background-repeat: no-repeat;
  border-radius: 5px;

  &:nth-child(3) {
    transform: translateX(-50%);
    z-index: 5;

    .content {
      h5 {
        font-size: 23px;
      }

      p {
        font-size: 19px;
      }
    }
  }

  &:nth-child(2),
  &:nth-child(4) {
    height: 420px;
    width: 300px;
    margin-top: 50px;
    z-index: 4;
  }

  &:nth-child(2) {
    transform: translateX(-135%);
  }

  &:nth-child(4) {
    transform: translateX(35%);
  }

  &:first-child,
  &:last-child {
    height: 365px;
    width: 280px;
    margin-top: 83px;
    z-index: 3;

    .content {
      h5 {
        font-size: 18px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  &:last-child {
    transform: translateX(105%);
  }

  &:first-child {
    transform: translateX(-205%);
  }

  .content {
    padding: 30px;
    color: white;

    h5 {
      font-size: 20px;
      font-weight: 400;
    }

    p {
      font-size: 17px;
      font-weight: 300;
      margin-top: 10px;
      padding-right: 35px;
    }
  }

  /* hide first and last card */
  @media (max-width: 1200px) {
    &:first-child,
    &:last-child {
      display: none;
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    height: 450px;
    width: 300px;

    &:nth-child(3) {
      .content {
        h5 {
          font-size: 22px;
        }

        p {
          font-size: 18px;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(4) {
      height: 380px;
      width: 250px;
      margin-top: 44px;
    }

    .content {
      h5 {
        font-size: 19px;
      }

      p {
        font-size: 16px;
        margin-top: 8px;
      }
    }
  }
`
