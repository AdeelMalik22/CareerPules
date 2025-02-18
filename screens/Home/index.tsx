import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';
import {colors, textColor} from '../../utils/Colors';
import DummyData from '../../utils/eventData.json';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // const toggleFavorite = (postId) => {
  //   setPosts((prevPosts) =>
  //     prevPosts.map((post) =>
  //       post.id === postId ? { ...post, isFavorite: !post.isFavorite } : post
  //     )
  //   );
  // };

  // const filteredPosts = posts.filter((post) =>
  //   post.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const handleReport = () => {
    Alert.alert('Reported');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header profile={true} notification />
      <View style={styles.header}>
        {/* <Text style={styles.headerTitle}>Job Board</Text> */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search jobs..."
            value={searchQuery}
            placeholderTextColor={'#333'}
            onChangeText={setSearchQuery}
          />
          {/* <Ionicons name="search" size={24} color="#000" /> */}
        </View>
      </View>

      {/* Posts */}
      <ScrollView style={styles.postsContainer}>
        <View style={{paddingBottom: 20}}>
          <FlatList
            data={DummyData}
            renderItem={({item, index}: any) => (
              <PostCard
                Category={item.Category}
                Date={item.Date}
                Location={item.Location}
                Position={item.Position}
                Requirement={item.Requirement}
                handleApply={() => Alert.alert('Under Maintenance')}
                watch={false}
                Report
                handleReport={handleReport}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.white}`,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
    backgroundColor: `${colors.white}`,
    borderWidth: 1,
    borderColor: `${colors.gold}`,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${colors.white}`,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: `${colors.gold}`,
  },
  postsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    // backgroundColor: 'red'
  },
  post: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postDescription: {
    fontSize: 14,
    color: textColor,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: `${colors.gold}`,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  applyButtonText: {
    color: textColor,
    fontWeight: 'bold',
  },
});

export default Home;
