import React from 'react';
import Card from 'components/common/Card';
import Avatar from 'components/shared/Avatar';
import Badge from 'components/common/Badge';
import styles from './StudentCard.module.css';

const StudentCard = ({ student, onClick }) => {
  return (
    <Card className={styles.studentCard} onClick={onClick} clickable hoverable>
      <div className={styles.cardContent}>
        <Avatar name={student.name} size="lg" src={student.avatar} />
        <div className={styles.info}>
          <h3 className={styles.name}>{student.name}</h3>
          <p className={styles.class}>Class: {student.class}</p>
          <p className={styles.rollNo}>Roll No: {student.rollNo}</p>
          <Badge variant={student.status === 'active' ? 'success' : 'gray'}>
            {student.status}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default StudentCard;
