import styled from 'styled-components'

interface FooterProps {
  image: string
}

export const StyledFooter = styled.div<FooterProps>`
  padding: 40px 50px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  color: white;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* Tablets */
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .wrapper_company {
    padding-right: 10px;

    h2 {
      color: #f27f1b;
      font-size: 60px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    strong {
      font-size: 18px;
    }

    p {
      margin-top: 10px;
      font-size: 15px;
      color: rgba(255, 255, 255, 0.7);
      width: 90%;
    }
  }

  .wrapper_links {
    margin-top: 20px;

    p {
      font-size: 24px;
      margin-bottom: 10px;
    }

    a,
    button {
      padding: 0;
      margin: 0;
      margin-top: 15px;
      font-size: 18px !important;
      color: white;
      text-decoration: none;
      color: rgba(255,255,255,0.7);
      background: transparent;
      border: none;
      cursor: pointer;
    }

    button {
      padding-bottom: 2px !important;
    }
  }

  .wrapper_social_media {
    margin-top: 20px;

    p {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }

  /* Tablets */
  @media(max-width: 1000px) {
    .wrapper_links {
      margin-top: 60px;
    }

    .wrapper_social_media {
      margin-top: 60px;
    }
  }
  
  /* Celphones */
  @media(max-width: 500px) {
    .wrapper_company {
      padding-right: 0;

      h2 {
        font-size: 45px;
        margin-bottom: 5px;
      }

      strong {
        font-size: 17px;
      }

      p {
        margin-top: 8px;
        font-size: 14px;
        width: 100%;
      }
    }

    .wrapper_links {
      margin-top: 30px;

      p {
        font-size: 22px;
        margin-bottom: 5px;
      }

      a,
      button {
        margin-top: 10px;
        font-size: 17px !important;
      }
    }

    .wrapper_social_media {
      margin-top: 30px;

      p {
        font-size: 19px;
        margin-bottom: 20px;
      }
    }
  }
`

export const TraceBottom = styled.div`
  border-bottom: 1px solid #f27f1b;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  margin-right: 10px;
  width: 55px;

  &:nth-child(1), &:nth-child(2), &:nth-child(3) {
    height: 25px;
  }

  &:nth-child(2) {
    width: 70px;
  }
  
  &:nth-child(4) {
    width: 75px;
  }

  /* Tablets */
  @media(max-width: 1000px) {
    &:nth-child(1), &:nth-child(2), &:nth-child(3) {
      margin-top: 15px;
    }
  }

  /* Celphone */
  @media(max-width: 600px) {
    margin-top: 10px;

    &:nth-child(1), &:nth-child(2), &:nth-child(3) {
      margin-top: 5px;
    }
  }
`

export const RowLinks = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 70%;

  /* Tablets */
  @media (max-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }

  /* Celphone */
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const RowSocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  /* Small Celphone */
  @media(max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
