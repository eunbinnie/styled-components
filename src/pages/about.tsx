import styled from 'styled-components'
import Header from '@/components/Header';
import { menuArray } from '@/data/data';

const Text = styled.h1`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: #fff;
`;

const About = () => {
    return (
        <>
            <Header menuArray = {menuArray}/>
            <Text>About Page</Text>
        </>
    )
}

export default About;