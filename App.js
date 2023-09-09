import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const IPHONE = () => {
      return (
    <div>    
      <View>
      <Image source= {{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/285123570_5109550165830982_4287200935299373753_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=05bb41&_nc_eui2=AeHyGXgD6pTgZky4NmjbqvvvlAevZWtAYfWUB69la0Bh9Um04ghZmry6LNi3fxQv7MViuq1bvVJrJjhPjLnzbnb8&_nc_ohc=uFnN_w2c4MUAX-UPt5q&_nc_ht=scontent.fceb2-2.fna&oh=00_AfAL25WlRus2o1-2_lmwEOKsW_07QtxYx8_I6-M2ayCwtw&oe=6500D7D2' }}
            style= {styles.iphoneyarn}
      />
      <View style = {styles.watchView}>
      <Text style = {styles.watchText}>FAMILY ALBUM</Text>
      </View>

      </View >
    </div>  
  ); 
}


const Logo = () => {
  return (
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6711/6711415.png' }} 
            style ={styles.logoStyle}  
    />
  )

}
const LowerIcons = () => {
  return (
    <div>
      <View  style={styles.box}>
      <Image
       source={{
        uri: 'https://cdn-icons-png.flaticon.com/512/1375/1375106.png'}} 
        style={styles.logoStyle1} 
        />
      <Image
       source={{
        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD4+PiTk5OYmJgYGBj09PTu7u6bm5v6+vrGxsZYWFgaGhp/f3+FhYUmJiaNjY2goKAfHx+7u7vf398NDQ1ubm5aWlpQUFBycnJkZGREREQ+Pj7U1NQvLy+2trbCwsI2Njaqqqp5eXnY2Njl5eVISEjq92NpAAAEGElEQVR4nO2d7XaiMBCGFV0VULB+dLW2tfbr/i9xj9t2t0ICyYSZDPZ9fnpgmqeRhCRjMhgAAAAAAAAAAAAAAAAAAAAAfaSJFlIGuyQr8tVQC6u8yJJu/cZlbKka5ahDx3VsGwvrrgQXsU2sLLoRvI3t0cBtF4J6a/BMB7Wo9Rn8IvhZTGIbtBLaoo5iC7QyCqxCff1glTKsErPY5XcgCzIsYhffgSLIMI9dfAfyEMFUz8u2nVXISEN/X3EmpKmBoQ5gCEP9wBCGLez2xajY7yqflneL5XJx92i/bzzyZmx5w+I03K2nn1dOj4f/Hxevn3802Sxtt1KKM5Y2vH+4uDj7rLHi4i+mlhEmpTiWUGyG9aHneUqnfKh+ujn11PBouP55eJoYopieH0pxZA1NgoPBcWr8+L6Hhn6zI5P+Gd57BnqqRZhMvZlYGmYWw1pz0kbtUZz/8ma+lTPceUfinNLiMCRMNJ/6ZWhuMRuxvtyoNPT/kpraGs2Ge0KoTa8MKXOwjAMxBkPSYkivDK+/Dilry6+9MnwnhOpXW0rpDxnTATgMzUOnRhqmbDQa+nf5D3yCPGOLN99InEk5LIa+relbvVgTb1LJ8eFw4xforhaAUhzRWQy/pWXDU0gpjoaZKAuGhpRSHOHZRMO0oU/JKMURNnTvMYwzGJTiSM95zxyDTOddGYqvWzy5BTkYb56NvZnJrz05dRkvzTE6gNFw5fAGbvlm9cRw+NiajvTML8i7Btw2UhTJMOZd5X5vrEWZFGrmdfxDg6JQjjh3LsbB+geO7G4fsGebPFpa1Btusy/482m2xn5RLr1YImOonmqdCv7SRiQn6rl6o/lVjQeZrK+Xi/teLau1PAjltb1/a28kXmS+IZW5N//3MEr/FkwuN/FjSert5HTxzcybm9+xDf9+U12/oZTiiI+A62yPe9dLKcWRnsUIA4YwhGE/DRW0pXGAIQz1A0MY6geGMNQPDGGoHxjC0MCYEqsSgxJCbnzYRa4+JYTcGB+GRmDoAAwJ/Ni29Ddl4agSo59rT5GAIQz1A0MY6geGMNQPDGGoHxgSDHPKj5YqMXT/7un6R8DXP4sBQyMwdACGBCyGy9R/Q4RqKPV7KmgChjDUDwxhqB8YwlA/MIShfmBIMNxSNuOuxNC9n/eSsqF6JYbuPdmvf4wPQyMwdACGBH7sukVOOayp+l/qx3lPOoAhDPUDQxjqB4ZNXP+Zztd/LvcPOFud8zCxrqhv2uhDUsYufytlSEMzsA7JFEEayn2vxNgCrQRWodhewGQIx/hVkd7n0Y9FuCDvETGhUM7WMqC3U+ykBs+sRbeUdaeDZ/CLZKavXyxHwa3opWNW5Hpew1d5kXXr90GaaCFoNAEAAAAAAAAAAAAAAAAAAACY+AOstX1SIDt94QAAAABJRU5ErkJggg=='}} 
        style={styles.logoStyle1} 
        />  
      <Image
       source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_2M6pm6tlcWItTXHHqiNSIVYcYRqGumQVg&usqp=CAU'}} 
        style={styles.logoStyle1} 
        />   
      <Image
       source={{
        uri: 'https://w7.pngwing.com/pngs/714/653/png-transparent-iphone-telephone-computer-icons-search-blue-electronics-telephone-call.png'}} 
        style={styles.logoStyle1} 
        />     
      </View>
      
    </div>   
  )
}
const Btn = () => {
  const btn1 = 'ADD ALBUMS'
  
    return(
      <Text style={styles.topFont}>    {btn1}   </Text>
    )
};




export default function App() {
  return (
    <View style={styles.container}> 
     <View style={styles.box}>
        <Logo/>
        <View>
          <Btn/>
        </View>
      </View> 
    <View>
       
      <IPHONE/>
      <Image source= {{ uri: 'https://cdn-icons-png.flaticon.com/512/992/992482.png' }}
            style= {styles.logoStyle2}
      />
      </View>  
      
      
      <Text style = {styles.topFont}>MEDIA TYPES</Text>
      <Text style = {styles.topFont}>Videos     3 ➤ </Text>
      <Text style = {styles.topFont}>Selfies    5 ➤</Text>
      <Text style = {styles.topFont}>Portrait   7 ➤</Text>
      
      <View style={styles.box}> 
      </View>
      
      <Text style = {styles.topFont1}>UTILITIES</Text>
      <Text style = {styles.topFont1}>Imports     4 ➤</Text>
      <Text style = {styles.topFont1}>Duplicates 23 ➤</Text>
      <Text style = {styles.topFont1}>Hidden      21➤</Text>
      <View style={styles.box1}> 
      </View>
      
      <View style={styles.box2}>
        <LowerIcons/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    marginLeft: 50,
    backgroundColor: 'white',
    maxHeight: 732,
    maxWidth: 412,
  },
  watchView: {
    backgroundColor:'white',
    position: 'absolute',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 150,
    marginLeft: 40,
    height: 30,
  },   
  watchText: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    color: 'blue',
    marginLeft: 30,
    marginRight: 5
  },
  iphoneyarn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    width: 350, 
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'blue'
  },  
  logoStyle: {
    marginLeft: 5,
    width: 50,
    height: 50,
    marginTop: 5
  },
  logoStyle1: {
    marginLeft: 50,
    margin: 10,
    width: 40,
    height: 40,
    textAlign: 'center'
  },
  logoStyle2: {
    marginLeft: 45,
    marginTop: 155,
    width: 20,
    height: 20,
    position: 'absolute'
  },
  profileStyle: {
    marginLeft: 90,
    width: 40,
    height: 40,
    marginTop: 9
  },
  topFont: {
    color:'blue',
    fontSize: '20px',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 10  
  },
  topFont1: {
    color:'blue',
    fontSize: '20px',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 10  
  },
  box: {
    backgroundColor: 'white',
    width: 410, 
    height: 50,
    flexDirection: 'row',
    marginBottom: 10,
    
  },
  box1: {
    backgroundColor: 'white',
    width: 410, 
    height: 50,
    flexDirection: 'row'
  },
  box2: {
    backgroundColor: 'white',
    width: 410, 
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 100
  },
  cWatchdp: {
    width: 350, 
    height: 150,
    flexDirection: 'row',
    marginBottom: 2,
    margin: 2,
    borderRadius: 2,
    borderWidth: 3,
  },  
});