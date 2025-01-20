package com.practice.FinancingProfile.model;

import com.practice.FinancingProfile.Enum.EnumKnowledgeLevel;
import com.practice.FinancingProfile.Enum.EnumRiskProfile;
import com.practice.Objectives.model.ObjectiveModel;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;

import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
public class FinancingProfileModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "knowledge_level")
    @Enumerated(EnumType.STRING)
    private EnumKnowledgeLevel enumKnowledgeLevel;
    @Column(name = "risk_profile")
    @Enumerated(value = EnumType.STRING)
    private EnumRiskProfile enumRiskProfile;
    @Column(name = "income_monthly")
    private Double incomeMonthly;
    @Column(name = "expenses_monthly")
    private Double expensesMonthly;
    @Column(name = "percentage_save")
    private Double percentageSave;
    @Column(name = "total_debt")
    private Double totalDebt;
    @Column(name = "saving_total")
    private Double savingsTotal;
    @Column(name = "patrimony_total")
    private Double patrimonyTotal;

    @OneToMany(mappedBy = "financingProfile", targetEntity = ObjectiveModel.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ObjectiveModel> objectiveModels = new ArrayList<>();
}
