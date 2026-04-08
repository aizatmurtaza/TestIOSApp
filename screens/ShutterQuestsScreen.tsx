import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { CHALLENGES } from '../data/challenges';

export default function ShutterQuestsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const challenge = CHALLENGES[currentIndex];

  const handleShuffle = () => {
    let next: number;
    do {
      next = Math.floor(Math.random() * CHALLENGES.length);
    } while (next === currentIndex);
    setCurrentIndex(next);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appLabel}>SHUTTERQUESTS</Text>
          <TouchableOpacity style={styles.shuffleBtn} onPress={handleShuffle} activeOpacity={0.7}>
            <Text style={styles.shuffleBtnText}>Shuffle</Text>
          </TouchableOpacity>
        </View>

        {/* Challenge Card */}
        <View style={styles.card}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>YOUR CHALLENGE</Text>
          </View>
          <Text style={styles.challengeTitle}>{challenge.title}</Text>
          <Text style={styles.challengeDescription}>{challenge.description}</Text>
        </View>

        {/* Shooting Tips */}
        <Text style={styles.sectionLabel}>SHOOTING TIPS</Text>
        {challenge.tips.map((tip, index) => (
          <View key={index} style={styles.tipRow}>
            <View style={styles.tipNumber}>
              <Text style={styles.tipNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.85}>
          <Text style={styles.submitBtnText}>Ready to Submit →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  appLabel: {
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  shuffleBtn: {
    backgroundColor: '#2C2C2E',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },
  shuffleBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 28,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#3B1F6E',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 14,
  },
  badgeText: {
    color: '#C4B5FD',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  challengeTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 10,
  },
  challengeDescription: {
    color: '#9CA3AF',
    fontSize: 15,
    lineHeight: 22,
  },
  sectionLabel: {
    color: '#9CA3AF',
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '600',
    marginBottom: 16,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  tipNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    flexShrink: 0,
  },
  tipNumberText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  tipText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
    paddingTop: 5,
  },
  submitContainer: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 8,
    backgroundColor: '#000000',
  },
  submitBtn: {
    backgroundColor: '#8B5CF6',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
