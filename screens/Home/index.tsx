import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';
import {colors, textColor} from '../../utils/Colors';
import DummyData from '../../utils/eventData.json';
import CustomPopover from '../../components/CustomPopover';
import {RadioGroup} from 'react-native-radio-buttons-group';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<any>();
  const [getFilterName, setFilterName] = useState('');

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Remote',
        value: 'remote',
      },
      {
        id: '2',
        label: 'Past 24 hours',
        value: 'past24hours',
      },
    ],
    [],
  );

  useEffect(() => {
    if (selectedId) {
      const getFilterName = radioButtons.filter(item => item.id === selectedId).map(item => item.label);
      setFilterName(getFilterName[0]);
    }
  }, [selectedId]);

  const handleFilter = () => {};
  const handleReport = () => {
    Alert.alert('Reported');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header profile={true} notification />
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search jobs..."
            value={searchQuery}
            placeholderTextColor={'#333'}
            onChangeText={setSearchQuery}
          />

          <CustomPopover
            visible={popoverVisible}
            iconImage={require('../../Assets/Icons/filter.png')}
            iconStyle={styles.filter}
            onClose={() => setPopoverVisible(false)}
            handleIsVisible={() => setPopoverVisible(true)}
            Children={
              <View style={styles.popover}>
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  layout="column"
                  labelStyle={{
                    color: textColor,
                    fontSize: 16,
                  }}
                  containerStyle={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                />
              </View>
            }
          />
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
  filter: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  popover: {
    backgroundColor: `${colors.white}`,
    flex: 1,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    gap: 4,
  },
});

export default Home;
