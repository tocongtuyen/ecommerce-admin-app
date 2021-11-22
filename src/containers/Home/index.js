import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/Layout';

const Home = (props) => {
    return (
        <Layout>
            <Jumbotron style={{ margin: '3rem' }}>
                <h1>Welcom to Admin Dashboard</h1>
            </Jumbotron>
        </Layout >
    )
}

export default Home
