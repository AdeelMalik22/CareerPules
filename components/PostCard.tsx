import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, textColor} from '../utils/Colors';
import Popover from 'react-native-popover-view';

interface props {
  Category: string;
  Location: string;
  Position: string;
  Requirement: string;
  Date: string;
  watch: boolean;
  Report: boolean;
  popOverRef?: any;
  handleApply?: () => void;
  handleDelete?: () => void;
  handleReport?: () => void;
  status?: boolean,
  statusText?: string
}
const PostCard = ({
  Category,
  Location,
  Position,
  Requirement,
  Date,
  watch,
  Report,
  handleApply,
  handleDelete,
  handleReport,
  popOverRef,
  status,
  statusText
}: props) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../Assets/Images/profile.webp')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileTitle}>John Doe</Text>
          <Text style={styles.postTime}>2h ago</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Popover
            backgroundStyle={styles.popoverBackground}
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}
            ref={popOverRef}
            from={() => 
              <TouchableOpacity
                onPress={() => {
                  setShowPopover(true);
                }}>
                <Image
                  source={require('../Assets/Icons/dots.png')}
                  style={styles.cardIcons}
                />
              </TouchableOpacity>
            }>
            <View style={styles.popover}>
              <TouchableOpacity onPress={() => {
                if (Report) {
                  handleReport?.();
                } else {
                  handleDelete?.();
                }
                setShowPopover(false);
              }}>
                <Text>{Report ? 'Report' : 'Delete'}</Text>
              </TouchableOpacity>
            </View>
          </Popover>
        </TouchableOpacity>
      </View>

      {/* Post Text Section */}
      <View style={styles.postTextContainer}>
        <Text style={styles.postText}>
          <Text style={styles.innerText}>Category:</Text>{' '}
          {Category || `Wedding`}
        </Text>
        <Text style={styles.postText}>
          <Text style={styles.innerText}>Location:</Text>{' '}
          {Location || 'Jayanagar'}
        </Text>
        <Text style={styles.postText}>
          <Text style={styles.innerText}>Position:</Text> {Position || 'Remote'}
        </Text>
        <Text style={styles.postText}>
          <Text style={styles.innerText}>Requirement:</Text>{' '}
          {Requirement || '20 People male'}{' '}
        </Text>
        <Text style={styles.postText}>
          <Text style={styles.innerText}>Date:</Text> {Date || '25/06/2025'}
        </Text>
      </View>

      <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>
            {' '}
            {watch ? 'Visit' : 'Apply Now'}
          </Text>
        </TouchableOpacity> 
        {status?
         <View style={styles.StatusButton} >
          <Text style={styles.StatusButtonText}>
            {statusText ||"Pending"}
          </Text>
        </View>
      :''
      }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: `${colors.gold}`,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  cardIcons: {
    width: 10,
    height: 20,
  },
  playIcons: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  menuButton: {
    padding: 5,
  },
  postTextContainer: {
    marginBottom: 15,
  },
  postText: {
    fontSize: 14,
    color: `${colors.black}`,
    fontWeight: 500,
  },
  actionButtons: {
    display: "flex",
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent:"space-between",
    height: 50,
    borderTopWidth: 1,
    borderTopColor: `${colors.gold}`,
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 14,
    color: textColor,
  },
  applyButton: {
    backgroundColor: `${colors.gold}`,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  StatusButton:{
    backgroundColor: `${colors.gold}`,
    // opacity: 0.5,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
  },
  StatusButtonText:{
     color: `${colors.white}`,
    fontWeight: 'bold'
  },
  applyButtonText: {
    color: textColor,
    fontWeight: 'bold',
  },
  innerText: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Arial',
  },
  // popover
  popover: {
    backgroundColor: `${colors.white}`,
    padding: 10,
    borderRadius: 8,
    width: 100,
  },
  popoverBackground: {
    backgroundColor: 'none',
  },
});

export default PostCard;
