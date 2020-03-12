import React, { Component, PropTypes } from 'react';
import {
    View,
    AsyncStorage,
    Modal,
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native';

export default class WelcomePopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    componentDidMount() {
        AsyncStorage.getItem(this.props.pagekey, (err, result) => {
            if (err) {
            } else {
                if (result == null) {
                    console.log("null value recieved", result);
                    this.setModalVisible(true);
                } else {
                    console.log("result", result);
                }
            }
        });
        AsyncStorage.setItem(this.props.pagekey, JSON.stringify({ "value": "true" }), (err, result) => {
            console.log("error", err, "result", result);
        });
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    style={styles.PopupContainer}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.PopupContainer}>
                        <View style={styles.PopupTitleContainer}>
                            <Text style={styles.PopupTitle}>{this.props.title}</Text>
                        </View>
                        <View style={styles.PopupDescriptionContainer}>
                            <Text style={styles.PopupDescription} allowFontScaling={true}>
                                {this.props.description}
                            </Text>
                        </View>
                        <View style={styles.PopupExitContainer}>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <View style={styles.PopupExitButtonContainer}>
                                    <Text style={styles.PopupExitButtonText}>Got it!</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    PopupContainer: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 300,
        marginBottom: 300,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: 'black'
    },
    PopupTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    PopupDescription: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginRight: 20,
        marginLeft: 20
    },
    PopupCloseIcon: {
        alignSelf: 'flex-end',
        flex: 0.5,
        marginRight: 10
    },
    PopupTitleContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PopupDescriptionContainer: {
        flex: 4
    },
    PopupExitContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    PopupExitButtonContainer: {
        width: 200,
        height: 40,
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
    },
    PopupExitButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});