/**
 * Container for the main page.
 * @author  Nigel Abrera
 * @date    July 29, 2024
 * @update  July 29, 2024
 */

import styled from 'styled-components';
import { ContainerProps } from './Container.types';

const StyledContainer = styled.div<ContainerProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

const Container = ({
    backgroundColor,
    size = "normal",
    children,
}: ContainerProps) => {
    return (
        <StyledContainer 
        style={{ backgroundColor }} 
        size={size} 
        data-testid={"container"}>
            { children }
        </StyledContainer>
    );
};

export { Container };