import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import Separator from '../../components/atoms/separator'
// import SearchCard from './searchCard'

const SearchListItem = ({ searchID }) => {
  return (
    // <SearchCard
    //   searchID={searchID}
    // />
    <Text>searchID: {searchID}</Text>
  )
}

const ListEmptyComponent = () => {
  return (
    <View style={styles.emptyWrapper}>
      <Text style={styles.emptyText}>検索結果がありません</Text>
    </View>
  )
}

const SearchList = ({
  data
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.searchID}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => (
        <SearchListItem
          searchID={item.searchID}
        />
      )}
      ListEmptyComponent={<ListEmptyComponent />}
    />
  )
}

const styles = StyleSheet.create({
  emptyWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 16,
  },
  emptyText: {
    color: 'gray',
    fontSize: 16,
  },
})

export default SearchList