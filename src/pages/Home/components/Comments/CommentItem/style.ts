import styled from 'styled-components'

export const StyledCommentItem = styled.div`
  margin-top: 70px;
  text-align: left;
  display: flex;

  @media(max-width: 800px) {
    margin: 0 auto;
    margin-top: 70px;
  }

  .wrapper_image {
    margin-top: 10px;

    @media(max-width: 380px) {
      margin-top: 15px !important;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }

  .content {
    margin-left: 30px;

    p {
      max-width: 250px;
      color: #6D6D6D;
      line-height: 25px;
      font-size: 16px;

      @media(max-width: 1300px) {
        max-width: 100%;
        padding-right: 40px;
      }

      @media(max-width: 800px) {
        max-width: 250px;
        padding-right: 0;
      }
    }

    @media(max-width: 380px) {
      margin-left: 20px !important;

      p {
        font-size: 13px !important;
      }
    }

    .person_name {
      margin-top: 20px;
      display: flex;

      span {
        width: 15px;
        height: 2px;
        margin-top: 9px;
        background: rgba(0,0,0,0.5);
        margin-right: 10px;
      }

      small {
        font-size: 16px;
        color: rgba(0,0,0,0.65);
        font-weight: bold;
      }
    }
  }

  @media(max-width: 600px) {
    margin-top: 60px;

    .wrapper_image {
      margin-top: 8px;
    }

    .content {
      margin-left: 30px;

      p {
        color: #6D6D6D;
        line-height: 23px;
        font-size: 15px;
      }

      .person_name {
        margin-top: 10px;

        small {
          font-size: 16px;
        }
      }
    }
  }
`
