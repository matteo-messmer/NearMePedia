import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import PositionContainer from '../Unstated/PositionContainer';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import { Subscribe } from 'unstated';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import styles from '../Style';

export default class LocationItem extends Component {

    render() {
        return (
            <Subscribe to={[PositionContainer, ArticlesContainer]}>
                {
                    (position, articles) => {
                        return (
                            <TouchableOpacity style={styles.item} onPress={() => {
                                position.setCoordinates(this.props.location.coords);
                                articles.clear();
                                this.props.navigation.navigate("Home");
                            }
                            }>
                                <View>
                                    <Text style={styles.itemHeader}>{this.props.location.city}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }
                }
            </Subscribe>
        );
    }
}

