import styled from "styled-components";

export const StyledBlogShare = styled.aside`
    background-color: red;
    width: 400px;
`

const boxWidth = 300;
const boxHeight = 212;
const buttonHeight = 30;

const ShareButtons = styled.div`
  position: absolute;  
  width: ${boxWidth}px;
  height: ${boxHeight}px;
  padding-left: ${(boxWidth / 2) - (buttonHeight / 2)}px;  
  top: 50%;
  left: 50%;
  margin-left: -${boxWidth / 2}px;   
  margin-top: -${boxHeight / 2}px;    
`
const ShareButtonPrimary = styled.div`
  position: absolute;
  background: #fff;
  width: ${buttonHeight}px;
  height: ${buttonHeight}px;  
`
const ShareButtonSecondaryContent = styled.div`
  font-family: sans-serif;
  font-size: 0.75em;
  background: #fff;
`  

const ShareButton = styled.div`
  display: block;
  position: relative;
  height: ${buttonHeight}px;  
  
  &:hover {
    cursor: pointer;
    
    ${ShareButtonPrimary} {
      box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.1); 
    }
    
    ${ShareButtonSecondaryContent} {
      transform: translate3d(0, 0, 0);
    }
  }
`



const BlogShare = () => {

    return(
        <StyledBlogShare>
            <div className="share-buttons">
                
                <div className="share-button">
                    <div className="share-button-secondary">
                    <div className="share-button-secondary-content">
                        share on twitter
                    </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa fa-twitter"></i>
                    </div>
                </div>

                <div className="share-button">
                    <div className="share-button-secondary">
                    <div className="share-button-secondary-content">
                        share on facebook
                    </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa fa-facebook"></i>
                    </div>
                </div>

                <div className="share-button">
                    <div className="share-button-secondary">
                    <div className="share-button-secondary-content">
                        pin on pinterest
                    </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa fa-pinterest"></i>
                    </div>
                </div>
                
                <div className="share-button">
                    <div className="share-button-secondary">
                    <div className="share-button-secondary-content">
                        share on tumblr
                    </div>
                    </div>
                    <div className="share-button-primary">
                    <i className="share-button-icon fa fa-tumblr"></i>
                    </div>
                </div>
                
                <div className="share-button">
                    <div className="share-button-secondary">
                    <div className="share-button-secondary-content">
                        share on google+
                    </div>
                    </div>
                    <div className="share-button-primary">
                        <i className="share-button-icon fa fa-google-plus"></i>
                    </div>
                </div>

            </div>
        </StyledBlogShare>
    )
}

export default BlogShare;