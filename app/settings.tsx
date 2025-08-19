import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoReply, setAutoReply] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông báo</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <IconSymbol size={24} name="bell" color={Colors.tint} />
            <Text style={styles.settingText}>Thông báo đẩy</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: Colors.tint }}
            thumbColor={notifications ? '#fff' : '#f4f3f4'}
          />
        </View>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <IconSymbol size={24} name="speaker.wave.2" color={Colors.tint} />
            <Text style={styles.settingText}>Âm thanh</Text>
          </View>
          <Switch
            value={soundEnabled}
            onValueChange={setSoundEnabled}
            trackColor={{ false: '#767577', true: Colors.tint }}
            thumbColor={soundEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giao diện</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <IconSymbol size={24} name="moon" color={Colors.tint} />
            <Text style={styles.settingText}>Chế độ tối</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: Colors.tint }}
            thumbColor={darkMode ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chat</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <IconSymbol size={24} name="message" color={Colors.tint} />
            <Text style={styles.settingText}>Tự động trả lời</Text>
          </View>
          <Switch
            value={autoReply}
            onValueChange={setAutoReply}
            trackColor={{ false: '#767577', true: Colors.tint }}
            thumbColor={autoReply ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tài khoản</Text>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="person" color={Colors.tint} />
          <Text style={styles.menuText}>Thông tin cá nhân</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="lock" color={Colors.tint} />
          <Text style={styles.menuText}>Đổi mật khẩu</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="shield" color={Colors.tint} />
          <Text style={styles.menuText}>Bảo mật</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hỗ trợ</Text>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="questionmark.circle" color={Colors.tint} />
          <Text style={styles.menuText}>Trợ giúp</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="envelope" color={Colors.tint} />
          <Text style={styles.menuText}>Liên hệ hỗ trợ</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol size={24} name="doc.text" color={Colors.tint} />
          <Text style={styles.menuText}>Điều khoản sử dụng</Text>
          <IconSymbol size={20} name="chevron.right" color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông tin</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phiên bản</Text>
          <Text style={styles.infoValue}>1.0.0</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Ngày cập nhật</Text>
          <Text style={styles.infoValue}>15/12/2024</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Nhà phát triển</Text>
          <Text style={styles.infoValue}>AI Chat Team</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    fontSize: 16,
    color: Colors.text,
    marginLeft: 15,
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
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: Colors.text,
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
  },
});
