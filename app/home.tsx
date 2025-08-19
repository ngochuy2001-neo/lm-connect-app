import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.subtitle}>AI Chat App</Text>
          </View>
          <HelloWave style={styles.wave} />
        </View>

        <View style={styles.content}>
          <ThemedText type="title" style={styles.sectionTitle}>
            Get Started
          </ThemedText>
          <View style={styles.cardContainer}>
            <Link href="/profile" asChild>
              <Pressable style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>Explore</Text>
                  <Text style={styles.cardSubtitle}>Discover new features</Text>
                </View>
                <View style={styles.cardIcon}>
                  <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.cardImage}
                  />
                </View>
              </Pressable>
            </Link>

            <Link href="/chat" asChild>
              <Pressable style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>Chat</Text>
                  <Text style={styles.cardSubtitle}>Start a conversation</Text>
                </View>
                <View style={styles.cardIcon}>
                  <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.cardImage}
                  />
                </View>
              </Pressable>
            </Link>
          </View>

          <ThemedText type="title" style={styles.sectionTitle}>
            Recent Activity
          </ThemedText>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Text style={styles.activityIconText}>💬</Text>
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Chat with AI Assistant</Text>
                <Text style={styles.activityTime}>2 minutes ago</Text>
              </View>
            </View>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Text style={styles.activityIconText}>🔍</Text>
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Explored new features</Text>
                <Text style={styles.activityTime}>1 hour ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.tint,
  },
  wave: {
    marginLeft: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  cardContainer: {
    gap: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.tint,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 30,
    height: 30,
  },
  activityList: {
    gap: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activityIconText: {
    fontSize: 20,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
});
