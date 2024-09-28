import React from 'react'
import { View, StyleSheet, Image,Text,TouchableOpacity } from 'react-native-web';

function Tiktok_ok() {
  return (
    <View style={styles.container}>
        <View style = {styles.header}>
            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                <Image style= {{width:'104px', height: '127px', top:'14px', left:'13px'}}
                source={require('../assets/book.png')}/>
            <View style={{justifyContent:'space-between', flexDirection:'column'}}>
                <Text style={styles.Text1}>Nguyên hàm tích phân và ứng dụng</Text>
                <Text style={styles.Text2}>Cung cấp bởi Tiki Trading</Text>
                <Text style={styles.Text3}>141.800 đ</Text>
                <Text style={styles.Text4}>141.800 đ</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity>
                        <Image style={{width:'14.22px',height:'16px'}}
                        source={require('../assets/btnminus.png')}
                        />
                    </TouchableOpacity>

                    <Text style={{fontSize:'15px', fontWeight: '700'}}>1</Text>

                    <TouchableOpacity>
                        <Image style={{width:'14.22px', height:'16px'}}
                            source={require('../assets/btnadd.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style ={{color:'#134FEC', fontWeight:'700', fontSize: '12px'}}>Mua sau</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={styles.InputText5}>
                <Text style={styles.Text5}>Mã giảm giá đã lưu</Text>
                <TouchableOpacity>
                    <Text style={styles.btnWatchHere}>Xem tại đây</Text>
                </TouchableOpacity>

            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        alignItem: 'center',
        width: '360px',
        height: '640px'
    },
    header: {
        width:'400px',
        height: '283px',
        backgroundColor: '#FFFFFF'
    },
    Text1:{
        font: 'Roboto',
        fontWeight: '700',
        fontSize: '12px',
        lineHeight: '14.06px'
    },
    Text2: {
        font: 'Roboto',
        fontWeight: '700',
        fontSize: '12px',
        lineHeight: '14.06px'
    },
    Text3: {
        font: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21.09px',
        color: '#EE0D0D'
    },
    Text4:{
        fontWeight: '12px',
        textDecorationLine: 'line-through',
        color: '#808080'
    },
    InputText5: {
        flexDirection: 'row',
        fontSize: '12px',
        justifyContent: 'space-between'
    },
    Text5:{
        fontSize:'12px',
        fontWeight: '700'
    },
    btnWatchHere:{
        fontWeight:700,
        fontSize:"15px",
        color:"#134FEC",marginTop:"10px"
    },
})
export default Tiktok_ok;