import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <IconSymbol size={80} name="person.circle.fill" color={Colors.tint} />
        </View>
        <Text style={styles.name}>Nguyễn Văn A</Text>
        <Text style={styles.email}>nguyenvana@example.com</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Tin nhắn</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Cuộc hội thoại</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Ngày</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="person" color={Colors.tint} />
          <Text style={styles.menuText}>Chỉnh sửa hồ sơ</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="bell" color={Colors.tint} />
          <Text style={styles.menuText}>Thông báo</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="lock" color={Colors.tint} />
          <Text style={styles.menuText}>Bảo mật</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cài đặt</Text>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="gear" color={Colors.tint} />
          <Text style={styles.menuText}>Cài đặt chung</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="questionmark.circle" color={Colors.tint} />
          <Text style={styles.menuText}>Trợ giúp</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="info.circle" color={Colors.tint} />
          <Text style={styles.menuText}>Về ứng dụng</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <IconSymbol size={24} name="rectangle.portrait.and.arrow.right" color="#ff4444" />
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatarContainer: {
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.tint,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#e0e0e0',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff4444',
  },
  logoutText: {
    fontSize: 16,
    color: '#ff4444',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
