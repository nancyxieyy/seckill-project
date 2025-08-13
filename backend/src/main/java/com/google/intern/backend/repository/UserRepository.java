package com.google.intern.backend.repository;

import com.google.intern.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring Data JPA 会根据方法名自动生成SQL查询
    User findByNickname(String nickname);
}
