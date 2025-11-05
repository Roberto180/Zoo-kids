import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E6',
    paddingVertical: 10,
  },
  
  grid:{
    flexDirection: 'collumn',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },

  img:{
    width: 370,
    height: 120,
    borderRadius: 200,
    margin: 10,
    borderRadius: 100,
    resizeMode: 'cover',
  },

  // Modal abaixo
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  modalCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#f9f7ff',
    borderRadius: 20,
    paddingBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 12,
  },

  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
    backgroundColor: '#ff6b6b',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  nomeAnimal:{
    fontSize: 26,
    fontWeight: '800',
    marginTop: 18,
    marginBottom: 8,
    color: '#b90000',
    textAlign: 'center',
    paddingHorizontal: 12,
  },

  imagem:{
    width: '92%',
    height: 220,
    borderRadius: 16,
    alignSelf: 'center',
    marginVertical: 8,
  },

  v1:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },

  v2:{
    maxHeight: 160,
    backgroundColor: '#e9ffee',
    borderRadius: 12,
    marginHorizontal: 12,
    marginTop: 6,
    padding: 12,
  },

  descricaoText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'left',
    marginBottom: 15,
  },

  v3:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  button:{
    backgroundColor: '#ffb300',
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#5b2b00',
    fontWeight: '700',
    fontSize: 16,
  },
// Fim Modal acima

  header: {
    alignItems: 'center',
    marginVertical: 10,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#b90000',
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#4a4a4a',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 8,
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 6,
  },

  cardImage: {
    width: 310,
    height: 170,
    borderRadius: 12,
  },

  cardText: {
    marginTop: 10,
    fontWeight: '700',
    color: '#222',
  },
  
})