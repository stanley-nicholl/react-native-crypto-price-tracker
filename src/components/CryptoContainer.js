import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { getPrices } from '../actions'

import Crypto from './Crypto'

const screenWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 10,
        width: screenWidth
    }
})

const { contentContainer } = styles

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.getPrices()
    }

    renderCoins() {
        const { crypto } = this.props
        const arrayData = []
        for(let key in crypto.data.data) {
            let temp = crypto.data.data[key]
            arrayData.push(temp)
        }
        return arrayData.map((coin, index) => {
            return <Crypto 
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.quotes.USD.price}
                percent_change_24h={coin.quotes.USD.percent_change_24h}
                percent_change_7d={coin.quotes.USD.percent_change_7d} 
                />
        })
    }

    render() {
        const { crypto } = this.props

        if(crypto.isFetching) {
            return (
                <View>
                    <Spinner 
                        visible={crypto.isFetching}
                        color={'black'}
                        textContent={'Loading...'}
                        textStyle={{color: '#253145'}}
                        animation='fade'
                    />
                </View>
            )
        }
        
        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoins()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { getPrices })(CryptoContainer)