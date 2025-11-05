import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E6',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  
  header: {
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 8,
  },

  headerTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: '#b90000',
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#4a4a4a',
    marginTop: 4,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  card: {
    backgroundColor: '#ffffff',
    width: '48%',
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },

  textButton: {
    color: '#222',
    fontWeight: '800',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },

  logo: {
    backgroundColor: '#fff',
    borderRadius: 999,
    width: 96,
    height: 96,
  },

})