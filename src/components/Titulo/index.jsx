import styled from "styled-components";

const Titulo = styled.h2`
    font-size: 32px;
    text-align: ${props => props.alinhamento ? props.alinhamento : "left"};
    color: #7B78E5;
`;

export default Titulo;